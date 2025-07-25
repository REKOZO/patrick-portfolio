# Eric NZENGUE Campaign Website

## Overview

This is a modern full-stack web application for Eric NZENGUE's political campaign targeting the Gabonese diaspora. The application is built with a React frontend using Vite, an Express.js backend, and PostgreSQL database with Drizzle ORM. The website serves as a comprehensive platform for diaspora mobilization, voter engagement, and community interaction.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/UI components with Radix UI primitives
- **Styling**: Tailwind CSS with custom campaign-specific color variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints with JSON responses
- **Error Handling**: Centralized error middleware
- **Development**: Hot reload with tsx for development server

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations
- **Session Storage**: In-memory storage for development (configurable for production)

## Key Components

### Core Entities
1. **Members**: Diaspora community members with registration and engagement tracking
2. **Polls**: Interactive voting system for community feedback
3. **Feedback**: Citizen complaints, ideas, and proposals system
4. **Projects**: Community project proposals and tracking
5. **Contacts**: Contact form submissions
6. **Newsletter**: Email subscription management
7. **Users**: Admin/staff user management

### Frontend Pages Structure
- **Home**: Hero section with member counter and program overview
- **Candidate**: Biography and background information
- **Program**: Detailed campaign platform and proposals
- **Projects**: Interactive map and project proposal system
- **News**: Blog, events calendar, and announcements
- **Feedback**: Polling system and citizen feedback forms
- **Resources**: Document downloads and practical guides
- **Gallery**: Photo and video media collection
- **Join**: Membership registration and community statistics
- **Contact**: Contact forms and social media integration

### API Endpoints
- **Members API**: Registration, count tracking, email validation
- **Polls API**: Active polls, voting, results visualization
- **Feedback API**: Submission and management of citizen input
- **Projects API**: Proposal submission and tracking
- **Contact API**: Contact form handling
- **Newsletter API**: Subscription management

## Data Flow

1. **User Registration**: Visitors can join the campaign through forms that validate data and store member information
2. **Community Engagement**: Members participate in polls and provide feedback through interactive forms
3. **Content Management**: Static content is served through React components with dynamic data from the API
4. **Real-time Updates**: TanStack Query provides optimistic updates and cache management for dynamic content
5. **Form Submissions**: All forms use React Hook Form with Zod validation before API submission

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Data and API
- **Neon Database**: Serverless PostgreSQL hosting
- **TanStack Query**: Server state management
- **Zod**: Runtime type validation
- **React Hook Form**: Form state management

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production
- **Drizzle Kit**: Database schema management

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: Environment variable configuration for DATABASE_URL

### Production Build
- **Frontend**: Vite build to static assets in `dist/public`
- **Backend**: ESBuild compilation to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### File Structure
- **Client**: React application in `client/` directory
- **Server**: Express API in `server/` directory  
- **Shared**: Common schemas and types in `shared/` directory
- **Build Output**: Combined in `dist/` for deployment

The application follows a monorepo structure with clear separation between frontend, backend, and shared code, making it maintainable and scalable for a political campaign website targeting diaspora engagement.