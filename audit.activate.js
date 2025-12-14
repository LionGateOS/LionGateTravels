// audit.activate.js
// v35 - activate audit logging calls (TEST MODE)
// This file demonstrates where action handlers should call audit helpers.

import { auditCancel, auditChange, auditIssue } from './audit.integration.js';

export function onCancel(ref, vendor) {
  auditCancel(ref, vendor);
}

export function onChange(ref, vendor) {
  auditChange(ref, vendor);
}

export function onIssue(ref, vendor) {
  auditIssue(ref, vendor);
}
