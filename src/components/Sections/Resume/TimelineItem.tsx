import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div style={{display: "flex", justifyContent: "flex-start"}}>
        {logo}
        <div style={{paddingLeft: "50px"}}>
          <h2 className="text-xl font-bold" style={{textAlign: "left"}}>{title}</h2>
          <div className="grid">
            <span className="flex-1 text-sm font-medium sm:flex-none" style={{textAlign: "start"}}>{location}</span>
            <span className="flex-1 text-sm sm:flex-none" style={{textAlign: "start"}}>{date}</span>
          </div>
        </div>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
