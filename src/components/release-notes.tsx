import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample release notes data
const releaseNotesData = [
  {
    id: 1,
    version: "1.10.3b",
    date: "March 27, 2025",
    emoji: "🎉",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "If you encounter any issues, please report them on the issues page.",
      "Terribly sorry for the frequent updates, this emergency release simply updates Firefox, fixing a critical vulnerability in chromium's sandboxing system. You can read more here:",
    ],
    link: "https://cyberinsider.com/firefox-says-its-vulnerable-to-chromes-zero-day-used-in-espionage-attacks/"
  },
  {
    id: 2,
    version: "1.10.2",
    date: "March 15, 2025",
    emoji: "🚀",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "This release brings several performance improvements and bug fixes:",
      "• Improved startup time by 25%",
      "• Fixed memory leak in the tab manager",
      "• Added support for new extension APIs",
      "• Updated Chromium to version 123.0.6312.58"
    ]
  },
  {
    id: 3,
    version: "1.10.1",
    date: "February 28, 2025",
    emoji: "🛠️",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "Minor update with the following changes:",
      "• Fixed an issue with the password manager",
      "• Improved compatibility with certain websites",
      "• Updated translations for 12 languages",
      "• Fixed UI glitches in dark mode"
    ]
  },
  {
    id: 4,
    version: "1.10.0",
    date: "February 10, 2025",
    emoji: "✨",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "Major release with exciting new features:",
      "• Completely redesigned settings page",
      "• New AI-powered content blocker",
      "• Improved tab grouping functionality",
      "• Added vertical tabs option",
      "• Enhanced privacy protections",
      "• New theme customization options"
    ]
  },
  {
    id: 5,
    version: "1.9.8",
    date: "January 25, 2025",
    emoji: "🔒",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "Security-focused release:",
      "• Patched several critical security vulnerabilities",
      "• Improved sandboxing for untrusted content",
      "• Enhanced tracking prevention",
      "• Updated certificate validation"
    ]
  },
  {
    id: 6,
    version: "1.9.7",
    date: "January 10, 2025",
    emoji: "🔧",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "Maintenance release with the following improvements:",
      "• Fixed several crashes reported by users",
      "• Improved compatibility with video conferencing sites",
      "• Better handling of high-DPI displays",
      "• Reduced memory usage for users with many tabs"
    ]
  },
  {
    id: 7,
    version: "1.9.6",
    date: "December 15, 2024",
    emoji: "🎄",
    githubLink: "#",
    workflowLink: "#",
    content: [
      "Holiday release with festive updates:",
      "• Added holiday theme (enable in settings)",
      "• Performance improvements for cold starts",
      "• Fixed several rendering issues",
      "• Updated media playback engine",
      "• Improved extension management"
    ]
  }
];

export function ReleaseNotes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedNotes, setExpandedNotes] = useState<number[]>([1]); // First note expanded by default
  
  const notesPerPage = 5;
  const totalPages = Math.ceil(releaseNotesData.length / notesPerPage);
  
  // Get current notes
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = releaseNotesData.slice(indexOfFirstNote, indexOfLastNote);
  
  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Auto-expand the first note of the new page
    const firstNoteIdOnPage = releaseNotesData[indexOfFirstNote]?.id;
    if (firstNoteIdOnPage && !expandedNotes.includes(firstNoteIdOnPage)) {
      setExpandedNotes([...expandedNotes, firstNoteIdOnPage]);
    }
  };
  
  // Toggle note expansion
  const toggleNoteExpansion = (noteId: number) => {
    if (expandedNotes.includes(noteId)) {
      setExpandedNotes(expandedNotes.filter(id => id !== noteId));
    } else {
      setExpandedNotes([...expandedNotes, noteId]);
    }
  };
  
  // Expand all notes
  const expandAll = () => {
    setExpandedNotes(releaseNotesData.map(note => note.id));
  };
  
  // Collapse all notes
  const collapseAll = () => {
    setExpandedNotes([]);
  };

  return (
    <div className="container py-32">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Release Notes</h1>
        <p className="text-muted-foreground">
          Stay up to date with the latest changes to Akselia! Since the <span className="text-primary">first release</span> till <span className="text-foreground font-medium">{releaseNotesData[0].version}</span>, we've been working hard to make Akselia the best it can be. Thanks everyone for your feedback! ❤️
        </p>
        
        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" className="bg-secondary/50">Give us some support!</Button>
          <Button 
            variant="outline" 
            className="bg-secondary/30"
            onClick={expandedNotes.length === releaseNotesData.length ? collapseAll : expandAll}
          >
            {expandedNotes.length === releaseNotesData.length ? "Collapse all" : "Expand all"}
          </Button>
        </div>
        
        <hr className="border-border my-12" />
        
        {currentNotes.map((note) => (
          <div key={note.id} className="mb-12">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleNoteExpansion(note.id)}
            >
              <h2 className="text-2xl font-bold">Release notes for {note.version}</h2>
              <span>{note.emoji}</span>
            </div>
            <p className="text-muted-foreground mt-2">{note.date}</p>
            
            <div className="flex gap-2 text-muted-foreground mt-2">
              <a href={note.githubLink} className="text-primary hover:underline">GitHub Release</a>
              <span>•</span>
              <a href={note.workflowLink} className="text-primary hover:underline">Workflow run</a>
            </div>
            
            {expandedNotes.includes(note.id) && (
              <div className="mt-4 space-y-4 text-muted-foreground">
                {note.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {note.link && (
                  <a href={note.link} className="text-primary hover:underline block mt-4">
                    {note.link}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
                className={currentPage === page ? "bg-primary" : ""}
              >
                {page}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
