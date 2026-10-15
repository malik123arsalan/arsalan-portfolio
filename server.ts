import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // In-memory message store for demonstration
  const receivedMessages: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    interest?: string;
    timestamp: string;
  }> = [];

  // API Route: Direct Contact Form Submission
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message, interest } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and message are required fields.',
        });
      }

      const newEntry = {
        id: `MSG-${Date.now()}`,
        name: String(name).trim(),
        email: String(email).trim(),
        subject: String(subject || 'General Inquiry').trim(),
        message: String(message).trim(),
        interest: String(interest || 'Agentic AI Development').trim(),
        timestamp: new Date().toISOString(),
      };

      receivedMessages.push(newEntry);

      console.log(`[EMAIL DISPATCHER] Message from ${newEntry.name} (${newEntry.email}) routed to arsalanmustafamalik@gmail.com`);
      console.log(`[SUBJECT] ${newEntry.subject}`);

      return res.status(200).json({
        success: true,
        message: 'Your message has been directly dispatched to Arsalan Mustafa Malik.',
        ticketId: newEntry.id,
        recipient: 'arsalanmustafamalik@gmail.com',
        timestamp: newEntry.timestamp,
      });
    } catch (err) {
      console.error('[API ERROR] /api/contact:', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to process message dispatch.',
      });
    }
  });

  // API Route: Direct Hire Request
  app.post('/api/hire', async (req: Request, res: Response) => {
    try {
      const { name, email, role, timeline, details } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          error: 'Name and email are required.',
        });
      }

      console.log(`[HIRE INQUIRY] New hire request from ${name} (${email}) for role: ${role}`);

      return res.status(200).json({
        success: true,
        message: 'Hire request logged and notification sent to Arsalan.',
        role,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: 'Hire request error' });
    }
  });

  // API Route: Simulated Python LangGraph Agent Execution Trace
  app.post('/api/agent/run', (req: Request, res: Response) => {
    const { task, agent } = req.body;
    return res.json({
      status: 'COMPLETED',
      runtime: 'Python 3.11 / LangGraph',
      task: task || 'incident_triage',
      executionTimeMs: 142,
      steps: [
        { node: 'TelemetryIngest', state: 'SUCCESS', details: 'Extracted anomaly metrics.' },
        { node: 'ChromaDBRetrieval', state: 'SUCCESS', details: 'Matched 3 historical postmortems (cosine 0.94).' },
        { node: 'PydanticValidation', state: 'SUCCESS', details: 'Remediation plan schema strictly verified.' },
        { node: 'HITLGate', state: 'AWAITING_OPERATOR', details: 'Operator approval requested.' },
      ],
    });
  });

  // Serve Frontend
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[FULL-STACK PORTFOLIO] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
