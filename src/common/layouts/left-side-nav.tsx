import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import styles from './left-side-nav.module.scss'
import Logo from './logo';
import { CalendarFilled, HomeFilled, InfoCircleFilled, SafetyCertificateFilled, SmileFilled } from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];
export type LeftNavItem = {
  value: string;
  href: string;
  icon?: React.ReactNode;
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const ITEMS: LeftNavItem[] = [
  {
    value: "Trang chủ",
    href: "/",
    icon: <HomeFilled />,
  },
  {
    value: "Giới thiệu",
    href: "/gioi-thieu",
    icon: <InfoCircleFilled />
  },
  {
    value: "Sự kiện",
    href: "/su-kien",
    icon: <CalendarFilled />
  },
  {
    value: "Các ngày lễ",
    href: "/cac-ngay-le",
    icon: <SmileFilled />
  },
  {
    value: "Giúp đỡ",
    href: "/giup-do",
    icon: <SafetyCertificateFilled />
  },
];

const LeftSideNav: React.FC = () => {
  const router = useRouter();
  
  const items = ITEMS.map((item) => ({
    key: item.href,
    icon: item.icon,
    children: null,
    href: item.href,
    label: (
      <Link href={item.href}>
        {item.value}
      </Link>
    ),
  }));
  const activeItems = React.useMemo(() => {
    const list = ITEMS.filter(({ href }) => router.pathname === href).map(
      (item) => item.href
    );
    return list || [];
  }, [router.pathname]);
  
  return (
    <nav className={styles.left__side__nav}>
      <Logo />
      <Menu selectedKeys={activeItems} items={items} className={styles.left__side__nav__menu} />
    </nav>
  );
};

export default LeftSideNav;