import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-next-steps',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-8 lg:py-2 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative z-10">
        <div class="mb-8 text-center">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-2">Conclusion</h2>
          <h1 class="text-3xl md:text-4xl font-black text-[#1F2937] leading-tight mb-4">
            Next Steps for <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Expo Pass Networking
            </span>
          </h1>
          <div class="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="space-y-4">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Immediate Actions</h3>
            <div class="space-y-3">
              @for (step of immediateSteps; track step.title) {
                <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-all">
                  <div class="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <mat-icon class="text-sm">{{ step.icon }}</mat-icon>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-0.5">{{ step.title }}</h4>
                    <p class="text-[10px] text-gray-500 leading-relaxed">{{ step.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Strategic Goals</h3>
            <div class="p-6 bg-slate-900 rounded-[24px] text-white relative overflow-hidden h-full">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              <div class="relative z-10 space-y-4">
                <p class="text-lg font-light leading-relaxed italic">
                  "Our goal is to move from a logistics tool to the <span class="text-blue-400 font-bold">essential networking engine</span> for every professional event."
                </p>
                
                <div class="pt-4 border-t border-white/10">
                  <button class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                    <span>Initiate V1 Development</span>
                    <mat-icon class="text-sm">arrow_forward</mat-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 text-center">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Thank You</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlideNextStepsComponent {
  readonly immediateSteps = [
    { 
      title: 'Finalize V1 UI/UX', 
      description: 'Complete high-fidelity designs for meeting proposals and calendar views.',
      icon: 'design_services'
    },
    { 
      title: 'Technical Feasibility', 
      description: 'Review calendar sync (.ics) and notification engine requirements.',
      icon: 'code'
    },
    { 
      title: 'Pilot Program', 
      description: 'Identify 3 upcoming events to test the V1 networking features.',
      icon: 'rocket_launch'
    }
  ];
}
