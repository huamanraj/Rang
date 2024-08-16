import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import ColorBox from './ColorBox';

const PaletteGenerator = () => {
    const [palette, setPalette] = useState([]);
    const [paletteType, setPaletteType] = useState('random');

    // Function to generate a palette based on the selected type
    const generatePalette = () => {
        let newPalette;
        switch (paletteType) {
            case 'monochromatic':
                const monoBaseColor = chroma.random();
                newPalette = chroma.scale([monoBaseColor]).colors(5);
                break;
            case 'analogous':
                const analogousBaseColor = chroma.random();
                newPalette = chroma.scale([
                    analogousBaseColor,
                    analogousBaseColor.set('hsl.h', '+30'),
                    analogousBaseColor.set('hsl.h', '-30'),
                ]).colors(5);
                break;
            case 'complementary':
                const complementaryBaseColor = chroma.random();
                newPalette = chroma.scale([
                    complementaryBaseColor,
                    complementaryBaseColor.set('hsl.h', '+180'),
                ]).colors(5);
                break;
            case 'triad':
                const triadBaseColor = chroma.random();
                newPalette = chroma.scale([
                    triadBaseColor,
                    triadBaseColor.set('hsl.h', '+120'),
                    triadBaseColor.set('hsl.h', '-120'),
                ]).colors(5);
                break;
            case 'tetrad':
                const tetradBaseColor = chroma.random();
                newPalette = chroma.scale([
                    tetradBaseColor,
                    tetradBaseColor.set('hsl.h', '+90'),
                    tetradBaseColor.set('hsl.h', '-90'),
                ]).colors(5);
                break;
            default:
                newPalette = chroma.scale([chroma.random(), chroma.random()]).colors(5);
        }
        setPalette(newPalette);
    };

    useEffect(() => {
        generatePalette();
    }, [paletteType]);

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold my-8 text-purple-600">Funky Color Palette Generator</h1>
            <div className="mb-4">
                <label className="mr-2 text-white">Select Palette Type:</label>
                <select 
                    value={paletteType} 
                    onChange={(e) => setPaletteType(e.target.value)}
                    className="p-2 rounded-lg bg-gray-700 text-white"
                >
                    <option value="random">Random</option>
                    <option value="monochromatic">Monochromatic</option>
                    <option value="analogous">Analogous</option>
                    <option value="complementary">Complementary</option>
                    <option value="triad">Triad</option>
                    <option value="tetrad">Tetrad</option>
                </select>
            </div>
            <button 
                onClick={generatePalette}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition"
            >
                Generate Palette
            </button>
            <div className="flex justify-center mt-8">
                {palette.map((color, index) => (
                    <ColorBox key={`${color}-${index}`} color={color} />
                ))}
            </div>
        </div>
    );
};

export default PaletteGenerator;
