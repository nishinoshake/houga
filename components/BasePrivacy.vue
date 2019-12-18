<template>
  <section class="privacy">
    <h2 class="privacy-title">プライバシーポリシー</h2>
    <p class="privacy-text">
      本サイトでは、アクセス状況を把握するためにGoogle
      Analyticsを利用しています。<br class="pc" />Google
      Analyticsは、Cookieという仕組みを利用して情報の収集を行います。<br
        class="pc"
      />収集している内容や方法については、下記のリンクからご確認ください。
    </p>
    <ul class="privacy-list">
      <li class="privacy-item">
        <a
          href="https://policies.google.com/technologies/partner-sites?hl=ja"
          target="_blank"
          rel="noopener"
          aria-label="収集した情報のGoogleによる使用"
          >収集した情報の<span class="blue">G</span><span class="red">o</span
          ><span class="yellow">o</span><span class="blue">g</span
          ><span class="green">l</span><span class="red">e</span>による使用</a
        >
      </li>
      <li class="privacy-item">
        <a
          href="https://policies.google.com/technologies/cookies?hl=ja"
          target="_blank"
          rel="noopener"
          aria-label="GoogleによるCookieの利用方法"
          ><span class="blue">G</span><span class="red">o</span
          ><span class="yellow">o</span><span class="blue">g</span
          ><span class="green">l</span
          ><span class="red">e</span>によるCookieの利用方法</a
        >
      </li>
      <li class="privacy-item">
        <a
          href="https://policies.google.com/technologies/types?hl=ja"
          target="_blank"
          rel="noopener"
          aria-label="Googleが使用しているCookieの種類"
          ><span class="blue">G</span><span class="red">o</span
          ><span class="yellow">o</span><span class="blue">g</span
          ><span class="green">l</span
          ><span class="red">e</span>が使用しているCookieの種類</a
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.privacy {
  padding: 3rem 2rem 4rem;
  background-color: $color-darker;
  @include desktop {
    padding: 5rem 3rem 5.4rem;
  }
  &-title {
    margin-bottom: 2rem;
    line-height: 1;
    color: $color-white;
    @include font-l;
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    color: $color-white;
    @include font-m;
  }
  &-list {
    margin-top: 2rem;
  }
  &-item {
    line-height: 1.6;
    color: $color-white;
    @include font-s;
    &:nth-child(n + 2) {
      margin-top: 1rem;
    }
    a {
      padding-bottom: 3px;
      @include link($color-gray-dark);
      @include focus-visible {
        .blue {
          color: $color-g-blue;
        }
        .red {
          color: $color-g-red;
        }
        .yellow {
          color: $color-g-yellow;
        }
        .green {
          color: $color-g-green;
        }
      }
      @include desktop {
        &:hover {
          .blue {
            color: $color-g-blue;
          }
          .red {
            color: $color-g-red;
          }
          .yellow {
            color: $color-g-yellow;
          }
          .green {
            color: $color-g-green;
          }
        }
      }
    }
  }
}
</style>
