import React, { useState } from 'react';
import Layout from '@/components/layout';
import FormView from '@/components/form/formView';
import FormList from '@/components/form/formList';
import HeaderView from '@/components/form/headerView';
import { Header, OverrideStyleButton, Title, Wrapper } from '@/components/stylesComponent/stylesCmp';
import SideBar from '@/components/sideBar/sideBar';

export default function Home() {
  return (
    <Layout home>
      <div>
        <SideBar />
        {/* <HeaderView  />
        <div style={{ display: 'flex', }}>
          <FormList />
          <FormView  />
        </div> */}
        <Wrapper>
          <Title>
            <OverrideStyleButton>
              Next js
            </OverrideStyleButton>
          </Title>
          <Header>
            <h1>Hello</h1>
            <h4> Biren</h4>
          </Header>
        </Wrapper>
      </div>
    </Layout>
  );
}