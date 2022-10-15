import React from 'react'

const AddPostForm = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" id="postTitle" value={title}
        onChange={onTitleChanged}/>

        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged}/>
      <button type="button">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm