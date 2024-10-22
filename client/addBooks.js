//from chatGPT//

document.getElementById('author-search').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        axios.get(`http://localhost:3001/authors/search?name=${query}`)
            .then(response => {
                const dataList = document.getElementById('author-list');
                dataList.innerHTML = '';
                response.data.forEach(author => {
                    const option = document.createElement('option');
                    option.value = author.name;
                    dataList.appendChild(option);
                });
            })
            .catch(error => console.error(error));
    }
});