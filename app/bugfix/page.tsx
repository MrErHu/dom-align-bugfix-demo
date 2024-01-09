'use client';

import React from 'react';
import domAlign from '../../src/';

function $id(id): any {
    return document.getElementById(id);
}

export default function Simple() {

    React.useEffect(() => {
        const actualAlign = domAlign($id('source'), $id('target'), {
            points: ['bc', 'tc'],
            offset: [0, -10],
            targetOffset: [0, 0],
            overflow: {
                adjustX: true,
                adjustY: true,
            }
        });

        console.log('actualAlign: ', actualAlign)
    }, []);


    return (
        <div>
            <div>
                <div
                    style={{
                        background: 'yellow',
                        marginTop: 30,
                        width: 100,
                        height: 40,
                    }}
                    id="target"
                >
                    target node
                </div>
                <div style={{ width: 1000, height: 1000 }} />
                <div
                    style={{
                        background: 'red',
                        width: 200,
                        height: 40,
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        transition: 'all 0.5s',
                        overflowY: 'auto',
                    }}
                    id="source"
                >
                    source node
                </div>
            </div>
        </div>
    );
}
