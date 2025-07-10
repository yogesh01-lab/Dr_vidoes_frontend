import { CheckHit } from "./pageView";
const fs = require('fs');

const updateCount = (videoId) => {
    fs.readFile('./data.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        try {
            const data = JSON.parse(jsonString);
            
            // Check if the current page matches the video
            if (CheckHit({ id: videoId })) {
                data.count += 1;
                
                fs.writeFile('./data.json', JSON.stringify(data), err => {
                    if (err) {
                        console.log('Error writing file:', err);
                    } else {
                        console.log('Count updated successfully');
                    }
                });
            }
        } catch (err) {
            console.log('Error parsing JSON:', err);
        }
    });
};

// Call the function with the video ID you want to check
updateCount('1');
