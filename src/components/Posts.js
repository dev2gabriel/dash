import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Posts = ({ posts, openModal }) => {

  return (
      <>
       {
          posts.map((item, i) => 
            <div key={i} className="col-line">
              <p>{item.name}</p> 
              <div className="line-opt">
                <a href="#" openModal={openModal}>Editar <EditIcon /></a>
                <a href="#" openModal={openModal}>Excluir <HighlightOffIcon /></a>
              </div>
            </div>
          )
        }
    </>
  );
};

export default Posts;