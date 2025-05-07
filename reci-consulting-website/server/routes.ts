import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required' 
        });
      }
      
      // In a real application, here you would:
      // 1. Send an email notification
      // 2. Store the contact form submission in a database
      
      // Here we just log the submission (for demonstration)
      console.log('Contact form submission:', { name, email, company, service, message });
      
      // Store the contact in memory storage
      await storage.createContact({
        name,
        email,
        company,
        service,
        message,
        createdAt: new Date(),
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'There was a problem sending your message. Please try again.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
