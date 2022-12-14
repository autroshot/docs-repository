import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

export default function HomepageMain(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <p>
            잘못된 번역이나 빠진 내용이 존재할 수 있으므로 정확한 내용은 원문을
            확인해 주세요.
          </p>
          <p>문서의 목록과 원문 URL 및 출처는 다음과 같습니다.</p>
        </div>
        <ul>
          <li>
            <Link to={'https://nextjs.org/'}>Next.js</Link>
          </li>
          <li>
            <Link to={'https://docs.cypress.io/'}>Cypress</Link>
          </li>
          <li>
            기타{' '}
            <ul>
              <li>
                <Link to={'https://docs.emmet.io/'}>Emmet</Link>
              </li>
              <li>
                <Link to={'https://github.com/jquense/yup'}>Yup</Link>
              </li>
              <li>
                정규 표현식 - 손에 잡히는 10분 정규 표현식, 벤 포터, 인사이트
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
