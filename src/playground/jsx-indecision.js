console.log('App.js is running')


// JSX - JavaScript XML - syntax extension

const book = {
    title: 'The Bitcoin Standard',
    subtitle: 'To the Moon!',
    chapters: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const chapter = e.target.elements.chapter.value;
    if (chapter) {
        book.chapters.push(chapter);
        e.target.elements.chapter.value = '';
        console.log(book.chapters)
        render()
    } 
}

const removeAll = () => {
    book.chapters = []
    render()
}

const pickChapter = () => {
    const randomNum = Math.floor(Math.random() * book.chapters.length)
    const chapter = book.chapters[randomNum]
    alert(chapter)
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
          <h1>Title: {book.title}</h1>
          <p>{book.subtitle && `Subtitle: ${book.subtitle}`}</p>
          <p>{book.chapters.length > 0 ? `Chapters: ${book.chapters}` : 'No chapters'}</p>
          <button disabled={book.chapters.length === 0} onClick={pickChapter}>Pick A Chapter</button>
          <button onClick={removeAll}>Remove All</button>
          <ol>
          {
            book.chapters.map((chapter) => <li key={chapter}>{chapter}</li>)
          }          
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="chapter"></input>
              <button>Name A Chapter Yourself</button>
          </form>
        </div>
      );
      ReactDOM.render(template, appRoot);
}

render()



