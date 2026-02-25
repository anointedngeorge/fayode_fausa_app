import React from "react";

const ListComponent = ({
  content,
  title,
  classname,
}: {
  content: any[];
  title: string;
  classname?: string;
}) => {
  return (
    <div>
      <h3 className={classname}>{title}</h3>
      <div className="max-h-[600px] overflow-scroll">
        
        <div className="overflow-x-auto mt-3">
          {content.map((item, index) => (
            <p className="p-3 text-muted-foreground m-2" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
