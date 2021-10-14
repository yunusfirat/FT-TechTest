import React from 'react'

export default function Errorcomponent() {
    return (
        <section>
        <div className="o-grid-container">
          <div className="o-grid-row " data-o-grid-colspan="center 3 S3">
            <div className="search-results__heading">
              <div className="search-results__heading-refine">
              </div>
              <div className="search-results__heading-title">
                <h2 className="o-teaser-collection__heading o-teaser-collection__heading--half-width">
                  No results found
                </h2>
              </div>
            </div>

            <div className="search-tips">
              <p>Suggestions:</p>
              <ul>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
                <li>Try fewer keywords.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}
