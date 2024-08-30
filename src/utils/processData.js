/**
 * Processes raw data and extracts labels and values for the chart.
 * @param {Array} data - The raw data to be processed. Expected to be an array of objects.
 * @returns {Object} An object containing arrays for labels (dates) and values.
 */
const processData = (data) => {
    const labels = [];
    const values = [];

    data.forEach(yearData => {
        if (typeof yearData !== 'object' || yearData === null) {
            throw new Error('Year data should be a non-null object');
        }

        Object.keys(yearData).forEach(year => {
            const months = yearData[year];

            if (!Array.isArray(months)) {
                throw new Error('Month data should be an array');
            }

            months.forEach(monthData => {
                if (typeof monthData !== 'object' || monthData === null) {
                    throw new Error('Month data should be a non-null object');
                }

                Object.keys(monthData).forEach(month => {
                    const days = monthData[month];

                    if (!Array.isArray(days)) {
                        throw new Error('Day data should be an array');
                    }

                    days.forEach(dayData => {
                        if (typeof dayData !== 'object' || dayData === null) {
                            throw new Error('Day data should be a non-null object');
                        }

                        Object.keys(dayData).forEach(date => {
                            labels.push(date);
                            values.push(dayData[date]);
                        });
                    });
                });
            });
        });
    });

    return { labels, values };
};

export default processData;
