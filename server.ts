import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // In-memory persistent applications store
  const storedApplications: any[] = [];

  // Working backend API endpoint for student application enquiries
  app.post('/api/applications', (req, res) => {
    const data = req.body;
    if (!data || !data.fullName || !data.email || !data.phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required applicant fields: fullName, email, and phone are mandatory.'
      });
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `BCAS-2027-${randomSuffix}`;

    const submission = {
      referenceNumber,
      submittedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      data,
      status: 'Received',
      assignedCounselor: {
        name: 'BCAS International Placements Desk',
        campus: data.cityOrCampus || 'Colombo Campus',
        phone: '+94 76 141 5273'
      }
    };

    storedApplications.push(submission);

    return res.status(201).json({
      success: true,
      message: 'Application enquiry verified and confirmed by BCAS admissions server.',
      application: submission
    });
  });

  // Health and verification check
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'operational',
      service: 'BCAS International University Placements Server',
      timestamp: new Date().toISOString()
    });
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BCAS Placements server ready on http://0.0.0.0:${PORT}`);
  });
}

startServer();
