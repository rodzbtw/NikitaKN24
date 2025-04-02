import React from 'react';
import { Home } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">TESTSITE</span>
          </div>
          <nav>
            <button className="text-gray-500 hover:text-gray-700">Вийти</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Ласкаво просимо до TESTSITE</h1>
          <p className="text-gray-600">
            Ви увійшли як гість. Тут ви можете переглядати контент та користуватися основними функціями сайту.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;