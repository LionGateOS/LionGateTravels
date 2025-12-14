// abuse.guard.js
// v44 - Abuse prevention scaffold (TEST MODE)
// Placeholder for rate limiting / throttling logic

let actionCount = 0;
const LIMIT = 50;

export function allowAction() {
  actionCount += 1;
  if (actionCount > LIMIT) {
    return false;
  }
  return true;
}
