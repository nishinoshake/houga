<template>
  <section class="about">
    <h2 class="about-title">
      <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
    </h2>
    <div class="about-body">
      <p class="about-text">今日はなんだか邦画が観たい。</p>
      <p class="about-text">
        そう思って探し始めたものの、<br
          class="pc"
        />胸キュンものばかりが目についてしまい、<br
          class="pc"
        />気になる映画になかなか出会えない。
      </p>
      <p class="about-text">
        映画館へ行っても、次はこの映画が観たい、と思える予告が少なく、<br
          class="pc"
        />はやく本編が始まらないかなーと思ってしまうこともしばしば。
      </p>
      <p class="about-text">
        そんな気持ちの人が、どれほどいるかはわかりませんが、<br
          class="pc"
        />邦画を探すのが楽しくなる、おもしろい予告を集めました。
      </p>
      <p class="about-text">
        このサイトにない、おすすめの邦画などがありましたら、<br class="pc" /><a
          href="mailto:lawson.and.7.11@gmail.com"
          >メール</a
        >でご連絡をいただけたら嬉しいです。
      </p>
      <p class="about-text">
        また、
        <a href="https://yokoku.cc" target="_blank" rel="noopener"
          >予告の時間</a
        >
        /
        <a href="https://not-far-from-home.cc" target="_blank" rel="noopener"
          >映画館の近くに住みたい</a
        >というサイトも、<br
          class="pc"
        />並行してやっているので、興味があるかたはぜひ。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  padding: 3.5rem 2rem;
  @include desktop {
    max-width: $width-large;
    padding: 6rem 3rem 6rem 6rem;
  }
  a {
    @include link($color-link);
  }
  &-title {
    width: 2.5rem;
    margin-right: 2rem;
    flex: none;
    @include desktop {
      width: 3.5rem;
      margin-right: 5.8rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  &-body {
    min-width: 0;
    flex-grow: 1;
    margin-top: -0.6rem;
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    @include font-m;
    + .about-text {
      margin-top: 1em;
    }
  }
  &-list {
    margin-top: 1em;
    line-height: 1.8;
    @include font-s;
  }
}
</style>
