// audit.integration.js
// v34 - integrate audit logging with core actions (TEST MODE)
import { writeAudit } from './audit.writer.js';

export function auditCancel(ref, vendor) {
  writeAudit({ action: 'CANCEL', ref, vendor });
}

export function auditChange(ref, vendor) {
  writeAudit({ action: 'CHANGE', ref, vendor });
}

export function auditIssue(ref, vendor) {
  writeAudit({ action: 'ISSUE', ref, vendor });
}
