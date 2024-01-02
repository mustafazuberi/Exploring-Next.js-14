const ServerActionTestPage = () => {

  // const actionInComponent = async ()=>{
  //   "use server"
  //   console.log("it works!")
  // }

  return (
    <div>
      <form >
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Create</button>
      </form>

      <form >
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage