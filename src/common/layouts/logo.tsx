import { Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react'
import Image from 'next/image';

const Logo = () => {
  const width = 300;
  const height = width * (9/16);

  return (
    <Card
      style={{ width }}
      cover={
        <div style={{position: 'relative', height}}>
          <Image fill src='/imgs/cover.jpg' alt='Cover' />
        </div>
      }
    >
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="HoHoangLS"
        description="Nhớ Về Nguồn Cội"
      />
    </Card>
  );
};

export default Logo;