import { getByDisplayValue } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import './Community.css';

function Community() {

  const [title, settitle] = useState(['이 배드민채 어떤가요?', '배드민턴 재미있어요', '체육관 여기 너무 별로입니다']);
  const [date, setdate] = useState(['1분전', '11분전', '12분전']);
  const [hits, sethits] = useState(['1', '2', '3']);
  const [like, setlike] = useState(['4', '5', '6']);

  return(
      <>
        <div>
          <div className="community_name">
            커뮤니티
          </div>

          <div>
            <div className="community_line"></div>
            <div className="community_lists">
              <div className="community_lists_title">
                제목
              </div>
              <div className="community_lists_date">
                작성일
              </div>
              <div className="community_lists_hits">
                조회수
              </div>
              <div className="community_lists_like">
                추천수
              </div>
            </div>
            <div className="community_line"></div>
          </div>

          <div>
            {title.map(function(a, i) {
              return (
                <>
                  <div className="community_content">
                    <div className="community_content_title">
                      {title[i]}
                    </div>
                    <div className="community_content_date">
                      {date[i]}
                    </div>
                    <div className="community_content_hits">
                      {hits[i]}
                    </div>
                    <div className="community_content_like">
                      {like[i]}
                    </div>
                  </div>
                  <div className="community_content_line"></div>
                </>
              );
            })}
          </div>

          <div className="pagination">
            1 2 3 4
          </div>
        </div>
      </>
  )
}

export default Community;