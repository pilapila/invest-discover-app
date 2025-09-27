# Invest Discover App

Front-End Technical Assessment

## 🚀 Features

- **Dashboard Management**: View and manage your investment dashboard with real-time data
- **Stock Discovery**: Browse trending stocks and discover new investment opportunities
- **Buy Orders**: Execute stock purchases with market and limit orders
- **Responsive Design**: Mobile-first design with Ionic components
- **Modern Architecture**: Built with Angular 18

## 🛠️ Tech Stack

- **Angular 18**: With Signals, standalone components, lazy loading routes, new control flow and improved performance
- **Ionic 7**: Cross-platform mobile development framework
- **TypeScript**: Type-safe JavaScript development
- **RxJS**: Reactive programming for handling asynchronous operations (My recommendation is to use NgRx Signal Store over RxJs & Service for smaller state management)
- **Angular Signals**: New reactive primitive for state management

### Prerequisites

- Node.js 18+
- npm or yarn
- Angular CLI 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd invest-discover-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`


### Key Angular 18 Features Used

1. **Angular Signals**: Used throughout the application for reactive state management
2. **Standalone Components**: All components are standalone for better tree-shaking
3. **Lazy Loading**: Feature modules are lazy-loaded for optimal performance
4. **Modern Routing**: Uses the latest Angular Router features
5. **Angular New Control Flow**: enhanced performance, better type narrowing, deferred templates, no more commonModule and improved readability and ergonomics

**Benefits**:
- Better tree-shaking
- Simplified architecture
- Easier lazy loading
- Reduced boilerplate

### 3. **Improved Performance** ⚡
**Angular 18**:
- Built-in hydration for SSR
- Better change detection with Signals
- Optimized bundle splitting
- Faster compilation with esbuild

**Angular 14**:
- Slower change detection cycles
- Larger bundle sizes
- Less efficient compilation

### 4. **Enhanced Developer Experience** 👨‍💻
**Angular 18**:
- Better TypeScript support
- Improved error messages
- Enhanced debugging tools
- Modern build pipeline

**Angular 14**:
- Limited TypeScript features
- Less helpful error messages
- Older build tools

### 5. **Better Type Safety** 🔒
**Angular 18**:
- Stricter type checking
- Better inference with Signals
- Enhanced template type checking

**Angular 14**:
- Less strict type checking
- Weaker type inference
- Limited template type safety
