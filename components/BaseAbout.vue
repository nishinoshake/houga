<template>
  <section class="about">
    <h2 class="about-title">
      <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
    </h2>
    <div class="about-body">
      <p class="about-text">今日はなんだか邦画が見たい。</p>
      <p class="about-text">
        そう思って探し始めたものの、<br
          class="pc"
        />出てくるのは胸キュンラブストーリーばかりで、<br
          class="pc"
        />やるせない気持ちになった経験はありませんか？
      </p>
      <p class="about-text">
        以前は、映画館で予告を観るのが、ひそかな楽しみだったのですが、<br
          class="pc"
        />最近は、新しいヒロインや王子様の顔がひたすら流れる時間になりつつあるので、<br
          class="pc"
        />精神的に辛すぎて、予告が終わる頃を見計らって入ることすらあります。
      </p>
      <p class="about-text">
        まったく同じ気持ちの人がどれほどいるかはわかりませんが、<br
          class="pc"
        />邦画が好きで、予告も好きだけど、胸キュンはちょっとな・・・<br
          class="pc"
        />という方のために作られたのが、このサイトです。
      </p>
      <p class="about-text">
        このサイトには、実際に観て良かった感じた邦画のみを掲載しています。<br
          class="pc"
        />ざっくりとしたニュアンスとしては、食べログの3.6ぐらいです。
      </p>
      <p class="about-text">
        冒頭からさんざん胸キュン映画を悪く言いましたが、<br
          class="pc"
        />たまに怖いもの見たさで挑戦するのが楽しみだったりするので、<br
          class="pc"
        />もうちょっと減ってくれたら嬉しいな、ぐらいの気持ちです。<br
          class="pc"
        />（最近では、ホットギミックが良かったです）
      </p>
      <p class="about-text">
        このサイトに載っていない、おもしろい邦画などがありましたら、<br
          class="pc"
        />メールで教えていただけたら嬉しいです。
      </p>
      <ul class="about-list">
        <li>
          メール：<a href="mailto:lawson.and.7.11@gmail.com"
            >lawson.and.7.11@gmail.com</a
          >
        </li>
        <li>
          ソースコード：<a
            href="https://github.com/nishinoshake/houga"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  @include max {
    padding: 5rem 2rem;
  }
  @include min {
    padding: 6rem;
  }
  a {
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100% 100%;
    transition: background-size 0.6s $easeOutQuart;
    @include max {
      background-image: linear-gradient(
        transparent calc(100% - 1px),
        currentColor 1px
      );
    }
    @include min {
      background-image: linear-gradient(
        transparent calc(100% - 2px),
        currentColor 2px
      );
      &:hover {
        background-position: right center;
        background-size: 0 100%;
      }
    }
  }
  &-title {
    flex: none;
    @include max {
      width: 2rem;
      margin-right: 2rem;
    }
    @include min {
      width: 5rem;
      margin-right: 6rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  &-body {
    min-width: 0;
    flex-grow: 1;
    margin-top: -0.3rem;
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    @include max {
      font-size: 1.4rem;
    }
    @include min {
      font-size: 2rem;
    }
    + .about-text {
      margin-top: 1em;
    }
  }
  &-list {
    margin-top: 1em;
    line-height: 1.8;
    @include max {
      font-size: 1.4rem;
    }
    @include min {
      font-size: 2rem;
    }
  }
}
</style>
