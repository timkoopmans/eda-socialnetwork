import http from 'k6/http';

export default function () {
    http.post('http://localhost:3001/new_post', JSON.stringify({
        content: 'bar',
        subject: 'foo',
        id: '8d8712fc-786f-4d72-98ea-3669e56f7012'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}