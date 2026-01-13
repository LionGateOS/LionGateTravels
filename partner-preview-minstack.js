/* LionGateOS Travels — Partner Preview Minimal Stack v1
   Purpose: demonstrate planning intelligence without booking, pricing, or availability.
   Sources:
     - OpenStreetMap via Leaflet (map context)
     - Open-Meteo (weather context)
     - Teleport (urban area signals where available)
     - Unsplash Source (context imagery)
*/
(function () {
  "use strict";

  function el(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) { return String(s || "").replace(/[&<>"']/g, function (c) {
    return ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[c];
  }); }

  function setText(node, html) {
    if (!node) return;
    node.innerHTML = html;
  }

  function fmt(n) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    return Math.round(n);
  }

  function initUnsplash() {
    var img = el("img.lg-live-photo[data-unsplash]");
    if (!img) return;
    var q = img.getAttribute("data-unsplash") || "travel";
    var w = img.getAttribute("data-unsplash-w") || "1600";
    var h = img.getAttribute("data-unsplash-h") || "900";
    // "source.unsplash.com" provides free, unauthenticated context imagery.
    var url = "https://source.unsplash.com/" + w + "x" + h + "/?" + encodeURIComponent(q);
    img.src = url;
  }

  function initMap() {
    var mapNode = el("#lg-map");
    if (!mapNode) return;

    var lat = parseFloat(document.body.getAttribute("data-lg-lat"));
    var lon = parseFloat(document.body.getAttribute("data-lg-lon"));
    var zoom = parseInt(document.body.getAttribute("data-lg-zoom") || "6", 10);

    if (!isFinite(lat) || !isFinite(lon)) {
      setText(mapNode, "<div class='lg-fallback muted'>Map unavailable (missing coordinates).</div>");
      return;
    }

    if (!window.L) {
      setText(mapNode, "<div class='lg-fallback muted'>Map library not loaded.</div>");
      return;
    }

    try {
      var m = L.map(mapNode, { zoomControl: true, scrollWheelZoom: false }).setView([lat, lon], zoom);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(m);
      L.circleMarker([lat, lon], { radius: 7 }).addTo(m);
    } catch (e) {
      setText(mapNode, "<div class='lg-fallback muted'>Map failed to initialize.</div>");
    }
  }

  async function initWeather() {
    var out = el("[data-role='weather']");
    if (!out) return;

    var lat = parseFloat(document.body.getAttribute("data-lg-lat"));
    var lon = parseFloat(document.body.getAttribute("data-lg-lon"));
    if (!isFinite(lat) || !isFinite(lon)) {
      setText(out, "<span class='muted'>Weather context unavailable (missing coordinates).</span>");
      return;
    }

    // Open-Meteo forecast API (no key). We use it as a lightweight "reality check" preview.
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(lat) +
              "&longitude=" + encodeURIComponent(lon) +
              "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto";
    try {
      var r = await fetch(url, { cache: "no-store" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();

      var t = data && data.daily && data.daily.time ? data.daily.time : [];
      var tmax = data && data.daily && data.daily.temperature_2m_max ? data.daily.temperature_2m_max : [];
      var tmin = data && data.daily && data.daily.temperature_2m_min ? data.daily.temperature_2m_min : [];
      var psum = data && data.daily && data.daily.precipitation_sum ? data.daily.precipitation_sum : [];

      var rows = [];
      var n = Math.min(7, t.length, tmax.length, tmin.length);
      for (var i = 0; i < n; i++) {
        rows.push("<tr><td class='muted'>" + esc(t[i]) + "</td><td>" + fmt(tmin[i]) + "° / " + fmt(tmax[i]) + "°</td><td class='muted'>" + fmt(psum[i]) + " mm</td></tr>");
      }

      if (!rows.length) {
        setText(out, "<span class='muted'>Weather context unavailable.</span>");
        return;
      }

      setText(out,
        "<div class='muted' style='margin-bottom:8px;'>7‑day sample (planning reality check, not availability).</div>" +
        "<table class='lg-mini-table'><thead><tr><th>Date</th><th>Temp</th><th>Precip</th></tr></thead><tbody>" +
        rows.join("") + "</tbody></table>"
      );
    } catch (e) {
      setText(out, "<span class='muted'>Weather context could not be loaded right now.</span>");
    }
  }

  async function initTeleport() {
    var out = el("[data-role='teleport']");
    if (!out) return;

    var slug = document.body.getAttribute("data-lg-teleport") || "";
    if (!slug) {
      setText(out, "<span class='muted'>City signals: not available for this page (country/region view).</span>");
      return;
    }

    var url = "https://api.teleport.org/api/urban_areas/slug:" + encodeURIComponent(slug) + "/scores/";
    try {
      var r = await fetch(url, { cache: "no-store" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();

      var summary = (data && data.summary) ? String(data.summary) : "";
      summary = summary.replace(/<[^>]+>/g, ""); // strip HTML
      summary = summary.trim();

      var cats = (data && data.categories) ? data.categories.slice(0) : [];
      cats.sort(function (a, b) { return (b.score_out_of_10 || 0) - (a.score_out_of_10 || 0); });
      var top = cats.slice(0, 4).map(function (c) {
        var name = c && c.name ? c.name : "Signal";
        var score = (c && typeof c.score_out_of_10 === "number") ? (c.score_out_of_10 * 10) : NaN;
        return "<li><span class='muted'>" + esc(name) + ":</span> " + fmt(score) + "/100</li>";
      });

      var html = "";
      if (summary) html += "<div class='muted' style='margin-bottom:8px;'>" + esc(summary) + "</div>";
      if (top.length) html += "<ul class='lg-signal-list'>" + top.join("") + "</ul>";
      if (!html) html = "<span class='muted'>City signals unavailable.</span>";
      setText(out, html);
    } catch (e) {
      setText(out, "<span class='muted'>City signals could not be loaded right now.</span>");
    }
  }

  function boot() {
    initUnsplash();
    initMap();
    initWeather();
    initTeleport();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
