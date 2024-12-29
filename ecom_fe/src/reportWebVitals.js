import { onCLS, onFID, onLCP, onFCP, onINP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onLCP(onPerfEntry);
        onFCP(onPerfEntry);
        onINP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;
