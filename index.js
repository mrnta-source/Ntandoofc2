import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Resolve the current directory path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

// Set EventEmitter max listeners
import('events').then(events => {
    events.EventEmitter.defaultMaxListeners = 500;
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Routes
// Main homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Alternative routes for your website
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Website page routes
app.get('/youtube', (req, res) => {
    res.sendFile(path.join(__dirname, 'youtube.html'));
});

app.get('/youtube.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'youtube.html'));
});

app.get('/github', (req, res) => {
    res.sendFile(path.join(__dirname, 'github.html'));
});

app.get('/github.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'github.html'));
});

app.get('/learning', (req, res) => {
    res.sendFile(path.join(__dirname, 'learning.html'));
});

app.get('/learning.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'learning.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.json({ success: true, message: 'Message received successfully!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`🐞 LADYBUG Server Started Successfully!`);
    console.log(`📱 MR NTANDO OFC Website`);
    console.log(`🌐 Server running on: http://localhost:${PORT}`);
    console.log(`📺 YouTube: @mrnta-source`);
    console.log(`💻 GitHub: @mrnta-source`);
    console.log(`📞 WhatsApp: +263777124998`);
    console.log(`═══════════════════════════════════════`);
});

export default app;
