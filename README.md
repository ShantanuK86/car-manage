# 🚗 Car Management Application

[![Next.js](https://img.shields.io/badge/Next.js-13.0-blueviolet.svg)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen.svg)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-4.0-blue.svg)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern full-stack car management system built with Next.js, featuring user authentication, image management, and advanced search capabilities.


## ✨ Features

<img align="right" width="300" src="https://placehold.co/300x200?text=Features+Demo">

🔐 **Secure Authentication**
- User signup/login
- Protected routes
- Personal dashboard

🚙 **Car Management**
- Multi-image upload (up to 10)
- Detailed car information
- Edit & delete functionality

🔍 **Advanced Search**
- Real-time filtering
- Tag-based search
- Title & description search

📱 **Responsive Design**
- Mobile-first approach
- Cross-device compatibility
- Modern UI components

## 🛠️ Tech Stack

- Frontend: **Next.js 13**
- UI: **Shadcn** & **Tailwind CSS**
- Database: **MongoDB**
- ORM: **Prisma**
- Image Storage: **Cloudinary**

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 16.x+
MongoDB
Cloudinary Account
```

### Installation Steps

1. **Clone the repo**
```bash
git clone https://github.com/ShnatanuK86/car-management-app.git
cd car-management-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```env
# Create a .env file with:
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/car_management"
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Initialize Prisma**
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app! 🎉

## 📁 Project Structure

```
car-management-app/
├── 📂 app/
│   ├── 📂 api/
│   ├── 📂 auth/
│   ├── 📂 dashboard/
│   └── 📂 cars/
├── 📂 components/
├── 📂 prisma/
├── 📂 public/
└── 📂 styles/
```

## 🔗 API Routes

### Authentication
```http
POST /api/auth/signup - Register new user
POST /api/auth/login - User login
```

### Car Management
```http
POST   /api/cars     - Create new car
GET    /api/cars     - Get user's cars
GET    /api/cars/[id] - Get specific car
PUT    /api/cars/[id] - Update car
DELETE /api/cars/[id] - Delete car
```

## 🌐 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://car-manage-lilac.vercel.app/)

1. Push to GitHub/GitLab
2. Import to Vercel
3. Set environment variables
4. Deploy!

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Shadcn](https://ui.shadcn.com)
- [MongoDB](https://www.mongodb.com/)

## 📫 Contact


Project Link: [https://github.com/ShantanuK86/car-management-app](https://github.com/yourusername/car-management-app)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ShantanuK86">ME</a>
</p>