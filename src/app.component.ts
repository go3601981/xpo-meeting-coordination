import { Component, inject, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideTitleComponent } from './components/slides/slide-title.component';
import { SlidePurposeComponent } from './components/slides/slide-purpose.component';
import { SlideGapComponent } from './components/slides/slide-gap.component';
import { SlideNetworkingStackComponent } from './components/slides/slide-networking-stack.component';
import { SlideCompetitorsComponent } from './components/slides/slide-competitors.component';
import { SlideLimitationsComponent } from './components/slides/slide-limitations.component';
import { SlidePhilosophyComponent } from './components/slides/slide-philosophy.component';
import { SlideEntryPointsComponent } from './components/slides/slide-entry-points.component';
import { SlideParticipantListComponent } from './components/slides/slide-participant-list.component';
import { SlideMeetingTypesComponent } from './components/slides/slide-meeting-types.component';
import { SlideMeetingFlowComponent } from './components/slides/slide-meeting-flow.component';
import { SlideCalendarComponent } from './components/slides/slide-calendar.component';
import { SlideAdvantagesComponent } from './components/slides/slide-advantages.component';
import { SlideBusinessImpactComponent } from './components/slides/slide-business-impact.component';
import { SlideV1ScopeComponent } from './components/slides/slide-v1-scope.component';
import { SlideMatchmakingComponent } from './components/slides/slide-matchmaking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideTitleComponent,
    SlidePurposeComponent,
    SlideGapComponent,
    SlideNetworkingStackComponent,
    SlideCompetitorsComponent,
    SlideLimitationsComponent,
    SlidePhilosophyComponent,
    SlideEntryPointsComponent,
    SlideParticipantListComponent,
    SlideMeetingTypesComponent,
    SlideMeetingFlowComponent,
    SlideCalendarComponent,
    SlideAdvantagesComponent,
    SlideBusinessImpactComponent,
    SlideV1ScopeComponent,
    SlideMatchmakingComponent
  ],
  template: `
    <app-logo />

    <main 
      #mainContainer 
      tabindex="0" 
      class="w-full h-screen bg-[#F8FAFC] overflow-y-auto relative pb-24 lg:pb-20 outline-none"
    >
      
      @switch (presentation.currentSlideIndex()) {
        @case (0) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-title />
          </div>
        }
        @case (1) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-purpose />
          </div>
        }
        @case (2) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-gap />
          </div>
        }
        @case (3) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-networking-stack />
          </div>
        }
        @case (4) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-competitors />
          </div>
        }
        @case (5) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-limitations />
          </div>
        }
        @case (6) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-philosophy />
          </div>
        }
        @case (7) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-entry-points />
          </div>
        }
        @case (8) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-participant-list />
          </div>
        }
        @case (9) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-meeting-types />
          </div>
        }
        @case (10) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-meeting-flow />
          </div>
        }
        @case (11) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-calendar />
          </div>
        }
        @case (12) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-advantages />
          </div>
        }
        @case (13) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-business-impact />
          </div>
        }
        @case (14) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-v1-scope />
          </div>
        }
        @case (15) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-matchmaking />
          </div>
        }
      }

    </main>

    <app-nav-bar />
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent implements AfterViewInit {
  presentation = inject(PresentationService);
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Focus the main container to capture keyboard events immediately
    this.mainContainer.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      this.presentation.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.presentation.prevSlide();
    }
  }
}