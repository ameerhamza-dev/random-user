const Pagination = (props: { totalPosts: number; postsPerPage: number; paginate: (arg0: number) => void; }) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(props.totalPosts / props.postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
      <div className="flex justify-center bg-yellow-500">
      <ul className="">
          {pageNumbers.map((number) => (
              <li key={number} className=" my-10">
                  <a
                      href=""
                      className="transition-colors duration-200 text-blue-500 hover:text-blue-700"
                      onClick={() => props.paginate(number)}
                  >
                      {number}
                  </a>
              </li>
          ))}
      </ul>
  </div>
    );
};

export default Pagination;
