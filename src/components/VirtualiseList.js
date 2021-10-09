import React, { useState, useEffect } from 'react';
import { requestApi } from './../utils/service';

const VirtualiseList = () => {
  const [list, setlist] = useState([]);
  const [result, setResult] = useState('loading');
  const [atBottom, setAtBottom] = useState(false);
  const [page, setpage] = useState(0);
  const [pageSize, setpageSize] = useState(10);

  useEffect(() => {

    let requestObject = {
      url: 'https://jsonplaceholder.typicode.com/comments',
      method: 'GET'
    };
    requestApi(requestObject).then(res => {
      setResult(res.data);
      setlist(res.data.slice(0, pageSize));
      window.addEventListener('scroll', checkBottomPos);
    })

    return () => window.removeEventListener('scroll', checkBottomPos)
  }, []);

  function checkBottomPos(e) {
    // console.log(window.pageYOffset + window.innerHeight, document.body.offsetHeight);
    console.log("###$$$$ ", result);
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
      setpage((prevPage) => prevPage + 1);
      let currentList = list;
      console.log("#### ", result);
      let slicedResult = result.slice(page * pageSize, page * pageSize + pageSize);
      console.log(slicedResult);
      if (slicedResult.length > 0) {
        currentList.push(slicedResult);
        setlist(currentList);
      } else {
        window.removeEventListener('scroll', checkBottomPos)
      }
    }
  }


  function renderRow(item) {
    return (
      <li key={item.id} className="list-group-item">
        <div className="col">
          <div>{item.name}-<a href={`mailto:${item.email}`}>{item.email}</a></div>
          <div>{item.body}</div>
        </div>
      </li>
    );
  }

  return (
    <div>
      {/* {list.map(renderRow)} */}
      {result === 'loading' ? <div>loading</div> :
        <ul className="list-group">{list.map(item => renderRow(item))}</ul>
      }
    </div>
  );
}

export default VirtualiseList;
