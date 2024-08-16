import React from 'react';
import ColorBox from './ColorBox';

const defaultPalettes = [
    ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF'],
    ['#F39C12', '#D35400', '#E74C3C', '#C0392B', '#8E44AD'],
    ['#3498DB', '#1ABC9C', '#2ECC71', '#27AE60', '#2980B9'],
    ['#34495E', '#2C3E50', '#7F8C8D', '#95A5A6', '#BDC3C7'],
    ['#9B59B6', '#8E44AD', '#F1C40F', '#F39C12', '#E67E22'],
    ['#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50'],
    ['#E74C3C', '#C0392B', '#F39C12', '#D35400', '#9B59B6'],
    ['#2ECC71', '#27AE60', '#3498DB', '#2980B9', '#34495E'],
    ['#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#2C3E50'],
    ['#F1C40F', '#E67E22', '#E74C3C', '#C0392B', '#8E44AD']
];

const DefaultPalettes = () => {
    return (
        <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-white">Popular Color Palettes</h2>
            <div className="flex flex-wrap justify-center mt-4">
                {defaultPalettes.map((palette, index) => (
                    <div key={index} className="m-4">
                        <div className="flex">
                            {palette.map(color => (
                                <ColorBox key={color} color={color} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DefaultPalettes;
