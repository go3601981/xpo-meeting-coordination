import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-v1-scope',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Roadmap</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Recommended V1 Implementation
          </h1>
          <div class="w-20 h-1 bg-indigo-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- V1 Scope -->
          <div class="bg-white p-8 rounded-[32px] border border-indigo-100 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1.5 rounded-bl-2xl text-[9px] font-bold uppercase tracking-widest">
              Phase 1
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <mat-icon class="text-indigo-600 text-lg">rocket_launch</mat-icon>
              V1 Core Scope
            </h3>
            
            <div class="space-y-4">
              @for (item of v1Items; track item.title) {
                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <mat-icon class="text-[10px]">check</mat-icon>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-xs">{{ item.title }}</h4>
                    <p class="text-[10px] text-gray-500 leading-relaxed">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Future Evolution -->
          <div class="bg-slate-900 p-8 rounded-[32px] text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1.5 rounded-bl-2xl text-[9px] font-bold uppercase tracking-widest">
              Future
            </div>

            <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
              <mat-icon class="text-emerald-400 text-lg">auto_awesome</mat-icon>
              Future Evolution
            </h3>

            <div class="space-y-6">
              @for (item of futureItems; track item.title) {
                <div class="relative pl-6 border-l border-white/10">
                  <div class="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                  <h4 class="font-bold text-emerald-400 text-xs mb-0.5">{{ item.title }}</h4>
                  <p class="text-[10px] text-gray-400 leading-relaxed">{{ item.description }}</p>
                </div>
              }
            </div>

            <div class="mt-8 pt-6 border-t border-white/10">
              <p class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Strategic Goal</p>
              <p class="text-xs font-light italic text-gray-300">
                Evolving from a scheduling tool into an intelligent networking ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 20px; width: 20px; height: 20px; }
  `]
})
export class SlideV1ScopeComponent {
  readonly v1Items = [
    { 
      title: 'Meeting Proposals', 
      description: 'Direct invitations from profiles or chat with clear status tracking.' 
    },
    { 
      title: 'Time Selection', 
      description: 'Simple slot-based selection integrated with event schedule.' 
    },
    { 
      title: 'Meeting Type Selection', 
      description: 'Support for physical locations, virtual links, or custom spots.' 
    },
    { 
      title: 'Calendar Invites', 
      description: 'Automated .ics generation and email sync for external tools.' 
    }
  ];

  readonly futureItems = [
    { 
      title: 'Intelligent Matchmaking', 
      description: 'AI-driven attendee pairing based on interests, goals, and behavior.' 
    },
    { 
      title: 'Automatic Meeting Suggestions', 
      description: 'Proactive prompts to meet relevant people during downtime.' 
    },
    { 
      title: 'Networking Analytics', 
      description: 'Deep insights for organizers on connection quality and engagement.' 
    }
  ];
}
