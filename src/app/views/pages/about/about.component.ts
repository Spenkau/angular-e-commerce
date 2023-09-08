import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  aboutForm!: FormGroup;

  public textArray: string[] = [
    'Добро пожаловать в мир "Spezhan" – вашего надежного партнера в мире онлайн-шопинга! Мы гордимся представить вам наш уникальный интернет-магазин, где каждый клиент – это не просто покупатель, а настоящий член нашей расширенной семьи.\n',
    '"Spezhan" – это место, где ваше удовольствие от покупок сочетается с высочайшим качеством продукции. Мы стремимся предоставить вам широкий выбор товаров различных категорий, от моды и красоты до электроники и аксессуаров. Независимо от того, что вы ищете, наши полки буквально ломаются от разнообразия товаров, готовых удовлетворить ваши потребности и придать яркий акцент вашему образу жизни.\n',
    'Мы считаем, что каждая покупка – это больше, чем просто обмен товаров. Это возможность выразить свой стиль, воплотить мечты и создать неповторимый опыт. Именно поэтому мы постоянно обновляем наш ассортимент, чтобы вы могли наслаждаться самыми новыми и интересными предложениями.\n',
    'Однако "Spezhan" – это не только о продуктах. Мы гордимся нашей командой, вдохновленной вашей страстью к качественным и модным вещам. Мы стремимся создать общество, где каждый клиент чувствует себя уютно и важно. Наша цель – не просто удовлетворить ваши ожидания, а превзойти их, создавая приятные сюрпризы на каждом этапе вашего путешествия по магазину "Spezhan".\n',
    'Будьте уверены, что каждый товар, представленный у нас, прошел строгий отбор и тщательную проверку на качество. Мы заботимся о вашем удовольствии от покупок и гарантируем, что каждая покупка в "Spezhan" – это инвестиция в долгосрочное удовлетворение.\n',
    'Мы рады приветствовать вас в нашей интернет-семье "Spezhan". Будьте с нами, наслаждайтесь моментами покупок и довольствуйтесь невероятной энергией, которую приносит каждая удачная покупка. Спасибо, что выбрали нас, и пусть каждый день будет для вас ярким, стильным и увлекательным.\n',
    'С уважением,\n' +
    'Команда "Spezhan"\n'
  ];
  @ViewChild('parentBlock', {static: true}) parentBlock!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.aboutForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(2), Validators.maxLength(12)],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngAfterViewInit() {
    const children = this.parentBlock.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      this.renderer.setAttribute(children[i], 'appTextTransform', '')
    }
  }

  onAbout() {
    if (this.aboutForm.valid) {
      const nameControl = this.aboutForm.get('name')?.value;
      const emailControl = this.aboutForm.get('email')?.value;

      console.log(nameControl, emailControl)
    }
  }
}
