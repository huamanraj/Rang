import React from 'react';
import PaletteGenerator from './components/PaletteGenerator';
import DefaultPalettes from './components/DefaultPalettes';

function App() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
            <PaletteGenerator />
            <DefaultPalettes />
        </div>
    );
}

export default App;
