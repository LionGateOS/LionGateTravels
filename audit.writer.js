// audit.writer.js
// v33 - audit log write scaffold (TEST MODE ONLY)
import fs from 'fs';
import path from 'path';

export function writeAudit(entry) {
  try {
    const filePath = path.join(process.cwd(), 'audit.log.json');
    const raw = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : { entries: [] };

    raw.entries.push({
      ...entry,
      timestamp: new Date().toISOString(),
      mode: 'TEST'
    });

    fs.writeFileSync(filePath, JSON.stringify(raw, null, 2));
  } catch (err) {
    // Silent fail in test mode
  }
}
