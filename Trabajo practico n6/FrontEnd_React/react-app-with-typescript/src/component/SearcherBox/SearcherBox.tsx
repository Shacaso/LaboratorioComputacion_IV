const SearcherBox = (props:any) => {

  const handleOnChange = (e:any) => {
    console.log(e.target.value)
    props.handleChange(e.target.value)
  }

  return (
    <div className=" bg-gray-800 p-4 flex justify-center">
        <input className='text-gray-400 pl-[15px] rounded-3xl w-[65%] text-lg outline-0 border-2 border-gray-500' type="text" onChange={e => handleOnChange(e)} />
    </div>
  );
}

export default SearcherBox;