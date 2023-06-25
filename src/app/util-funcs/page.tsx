'use client';

import React from 'react';
import Accordion from '@/components/Accordion';
import StyleCommon from '@/components/StyleCommon';
import SampleTestData from '@/components/SampleTestData';
import AspectRatioImage from '@/components/AspectRatioImage';

export default function UtilFunctions() {
  const [visible, setVisible] = React.useState('');

  return (
    <main className='container min-h-screen pt-[5.5rem]'>
      <div>
        <h1 className='text-title'>Util functions</h1>
        <div className='mt-16'>
          <Accordion open={visible} onClick={setVisible}>
            <Accordion.List name='ratio' title='Aspect Ratio Calculator'>
              <Accordion.Item>
                <AspectRatioImage />
              </Accordion.Item>
            </Accordion.List>
            <Accordion.List name='sample_data' title='Sample test data'>
              <Accordion.Item>
                <SampleTestData />
              </Accordion.Item>
            </Accordion.List>
            <Accordion.List name='common_css' title='Generate CSS common'>
              <Accordion.Item>
                <StyleCommon />
              </Accordion.Item>
            </Accordion.List>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
