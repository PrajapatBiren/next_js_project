import React, { useState } from 'react';
import Layout from '@/components/layout';
import FormView from '@/components/form/formView';
import FormList from '@/components/form/formList';
import HeaderView from '@/components/form/headerView';
import { OverrideStyleButton, Title, Wrapper } from '@/components/stylesComponent/stylesCmp';

export default function Home() {
  const [status, setStatus] = useState(false)
  return (
    <Layout home>
      <div>
        <HeaderView status={status} setStatus={setStatus} />
        <div style={{ display: 'flex', }}>
          <FormList status={status} setStatus={setStatus} />
          <FormView status={status} setStatus={setStatus} />
        </div>
        <Wrapper>
          <Title>
            <OverrideStyleButton>
              Next js
            </OverrideStyleButton>
          </Title>
        </Wrapper>
      </div>
    </Layout>
  );
}