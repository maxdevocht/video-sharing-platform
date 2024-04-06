import React, { useState } from "react";

export default function Separator() {

    const [activeCategory, setActiveCategory] = useState('All'); // Initial active category

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

    return (
        <div className="separator">
            <h3>Discover World</h3>
            <div className="categories">
                {['All', 'New to you', 'Live', 'Gaming', 'Music', 'Cartoons', 'Challenges', 'Visual Arts', 'Trends'].map(
                (category, index) => (
                    <a
                    key={index}
                    className={`category ${category === activeCategory ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                    >
                    {category}
                    </a>
                )
                )}
            </div>
        </div>
    )
}