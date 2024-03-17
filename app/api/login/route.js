// pages/api/login.js
import connect from "@/mongoo/Mongoodb";
import LoginModel from "@/model/login";
export default async function post(req, res) {
  if (req.method === 'POST') {
    try {
      await connect(); // Connect to MongoDB

      // Check if admin user already exists
      const adminExists = await LoginModel.exists({ sno: 1 });

      if (!adminExists) {
        // Create admin user if it doesn't exist
        const adminUser = new LoginModel({
          sno: 1, // Assuming 1 as serial number for admin user
          password: '123456', // Set password to '123456' as per your request
          name: 'Admin User'
        });

        await adminUser.save();
      }
      res.redirect('/admin');

      res.status(200).json({ message: 'Admin user created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
