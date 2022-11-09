import React from 'react'
import LeftSideNav from './left-side-nav'
import { Layout, Row, Col } from 'antd';
import styles from './main-layout.module.scss'
import NextBreadcrumb from '../components/NextBreadcrumb';

const { Header, Footer, Content, Sider } = Layout;

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Row className={styles.layout}>
      <Col>
        <LeftSideNav />
      </Col>
      <Col style={{ flex: 1 }}>
        <Header className={styles.header}>
          <NextBreadcrumb className={styles.header} />
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </Col>
    </Row>
  );
};

export default MainLayout;