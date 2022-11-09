import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { LeftNavItem } from '../layouts/left-side-nav';

type Props = {
  className: string;
  filterByMenuItems?: LeftNavItem[]
}
type Crumb = {
  value?: string;
  icon?: React.ReactNode;
  href: string;
}

const NextBreadcrumb: React.FC<Props> = ({
  className,
  filterByMenuItems = [],
}) => {
  const router = useRouter();
  const [crumbs, setCrumbs] = React.useState<Array<Crumb>>([
    {
      href: "/",
      value: "Trang chủ",
      icon: <HomeOutlined />,
    },
  ]);

  React.useEffect(() => {
    if (!filterByMenuItems) {
      console.log(router.pathname)
    } else {
    }
  }, [router.pathname, filterByMenuItems]);

  return (
    <Breadcrumb className={className}>
      {crumbs.map(({ href, icon, value }) => (
        <Breadcrumb.Item key={href}>
          <Link href={href}>
            {icon} {value}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default NextBreadcrumb;