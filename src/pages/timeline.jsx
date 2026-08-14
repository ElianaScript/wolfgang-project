import React from 'react';
import '../index.css';

const events = [
  {
    year: '1909',
    label: 'WO born',
    category: 'WO',
    blurb: "Wolfgang Wolff is born on September 30, 1909 in Alsace Lorraine to ___",
  },
  {
    year: '1914',
    label: 'WWI begins',
    category: 'world',
    blurb: 'World War I begins in Europe, shaping Germany and the generation Wolfgang belonged to.',
  },
  {
    year: '1918',
    label: 'WWI ends',
    category: 'world',
    blurbs: 'Germany is defeated and the German Empire collapses. The Weimar Republic soon follows. During this time tensions were high due to the economic responsibility Germany had to Europe, leaving the economic state of the country in ruin. This was the base for Adolf Hitlers campaign for Chancellor--blaming Jewish people for the downfall of Germany and devestating loss of the war.',
  }, 
  {
    year: '1933',
    label: 'Hitler becomes Chancellor',
    category: 'germany',
    blurb: 'Adolf Hitler is appointed Chancellor of Germany, effectively transforming Germany into a Nazi dictatorship.',
  },
  {
        year: '1934',
        label: 'WW flees Nazi oppression',
        category: 'wolfgang',
        blurb: 'Wolfgang Wolff flees Germany in response to Nazi oppression.',
    },
    {
        year: '1939',
        label: 'WWII begins',
        category: 'world',
        blurb: 'Germany invades Poland, beginning World War II in Europe.',
    },
    {
        year: '1945',
        label: 'Nazi Germany falls',
        category: 'germany',
        blurb: 'Nazi Germany collapses as Allied forces defeat Germany, bringing the war in Europe to an end.',
    },
];

const Timeline = () => {
    return (
        <section className="timeline">
            <h1>Wolfgang Wolff: A Life in History</h1>

            <p className="timeline-intro">
                Explore Wolfgang Wolff's life alongside the historical events
                that shaped Germany and the world around him.
            </p>

            <div className="timeline-container">
                {events.map((event, index) => (
                    <div
                        className={`timeline-event ${event.category}`}
                        key={index}
                    >
                        <div className="timeline-year">
                            {event.year}
                        </div>

                        <div className="timeline-dot">
                            <div className="timeline-tooltip">
                                <strong>{event.label}</strong>
                                <p>{event.blurb}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;