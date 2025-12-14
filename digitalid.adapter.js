// digitalid.adapter.js
// v49 - Digital ID readiness scaffold (TEST MODE)
// Goal: support multiple government/industry digital ID formats via adapters.
//
// Supported targets (scaffold only):
// - W3C Verifiable Credentials (VC Data Model 2.0)
// - ISO/IEC 18013-5 mDL / mdoc
// - Document scan (passport/driver license) OCR flow (separate module later)
//
// NOTE: No real verification is performed in this scaffold.

export function parseDigitalId(payload) {
  // payload is expected to be a JS object or JSON string from a wallet handoff
  try {
    const obj = typeof payload === 'string' ? JSON.parse(payload) : payload;
    return { ok: true, kind: detectKind(obj), raw: obj };
  } catch (e) {
    return { ok: false, error: 'invalid_payload' };
  }
}

function detectKind(obj) {
  // Very lightweight heuristics
  if (obj && (obj['@context'] || obj.type || obj.credentialSubject)) return 'w3c_vc';
  if (obj && (obj.docType || obj.issuerSigned || obj.deviceSigned)) return 'iso_mdoc_mdl';
  return 'unknown';
}
