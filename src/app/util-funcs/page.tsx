'use client';

import { useState } from 'react';
import Accordion from '@/components/Accordion';
import StyleCommon from '@/components/StyleCommon';
import RegexCommon from '@/components/RegexCommon';
import SampleTestData from '@/components/SampleTestData';
import AspectRatioImage from '@/components/AspectRatioImage';

export default function UtilFunctions() {
  const [visible, setVisible] = useState('');

  return (
    <main className='container min-h-screen pt-[5.5rem]'>
      <div>
        <h1 className='text-title'>Util functions</h1>
        <div className='mt-16'>
          <Accordion open={visible} onClick={setVisible}>
            <Accordion.List name='ratio' title='Aspect Ratio Calculator' classNames='shadow-magic'>
              <Accordion.Item>
                <AspectRatioImage />
              </Accordion.Item>
            </Accordion.List>
            <Accordion.List name='sample_data' title='Sample test data' classNames='shadow-magic'>
              <Accordion.Item>
                <SampleTestData />
              </Accordion.Item>
            </Accordion.List>
            <Accordion.List name='common_css' title='Generate CSS common' classNames='shadow-magic'>
              <Accordion.Item>
                <StyleCommon />
              </Accordion.Item>
            </Accordion.List>
            <Accordion.List name='common_regex' title='Regex common' classNames='shadow-magic'>
              <Accordion.Item>
                <RegexCommon />
              </Accordion.Item>
            </Accordion.List>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
