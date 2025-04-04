# W Ideas 

A platform for discovering and sharing innovative startup ideas

## Key Features

- Discover trending startup ideas
- Share your startup concepts
- Connect with fellow entrepreneurs
- Track engagement with view counts
- Rich markdown content support

## Tech Stack

- **Frontend**: Next.js 14, TailwindCSS, Shadcn
- **Backend**: Clerk, Sanity, Sanity Studio

## Project Structure

```
app/
├── (auth)/        # Authentication routes
├── (root)/        # Main app routes
│   ├── startup/   # Startup pages
│   └── user/      # User profiles
├── api/          # API endpoints
├── studio/       # Sanity Studio
└── components/   # Reusable components

sanity/          # Sanity configuration
└── schemas/     # Content schemas
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/HeySkidee/w-ideas.git
cd w-ideas
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with required environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_WRITE_TOKEN=
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app